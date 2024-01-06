import bcrypt from "bcrypt"

import logger from '../../lib/logger'

const PASSWORDS = {
  admin: process.env.ADMIN_PASSWORD,
  //user: process.env.USER_PASSWORD,
  //company: process.env.COMPANY_PASSWORD,
  //proPlayer: process.env.PRO_PLAYER_PASSWORD,
  //proTeam: process.env.PRO_TEAM_PASSWORD,
  //host: process.env.HOST_PASSWORD
}

const responses = {
  POST: async (req, res) => {
    const { password } = await req.body

    for (let [user, pass] of Object.entries(PASSWORDS)){

      if (await bcrypt.compare(password, pass)){
        return res.status(200).json({ secret: process.env.ADMIN_SECRET })
      }
    }

    return res.status(401).json({ err: 'Wrong password' })
  }
}

export default async function endpoint(req, res){
  logger.info(`${req.url} - [${req.method}]`)

  if (!(req.method in responses)) {
    logger.debug(`Method ${req.method} is not supported`)
    return res.status(405).json({ err: `Method ${req.method} is not supported` })
  }

  try {
    await responses[req.method](req, res)
  } catch (err) {
    logger.warn(`Internal error: `, err)
    return res.status(500).json({ err: "Internal error" })
  }
}