import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavigationBar({ secret }) {
  return (
    <Navbar bg="dark" variant="dark" className="rounded-bottom" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Container>
        <Link legacyBehavior href="/home/[secret]" as={`/home/${secret}`}>
          <a className="navbar-brand">Home</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link legacyBehavior href="/games/[secret]" as={`/games/${secret}`}>
              <a className="nav-link">Games</a>
            </Link>
            <Link legacyBehavior href="/companies/[secret]" as={`/companies/${secret}`}>
              <a className="nav-link">Companies</a>
            </Link>
            <Link legacyBehavior href="/consoles/[secret]" as={`/consoles/${secret}`}>
              <a className="nav-link">Consoles</a>
            </Link>
            <Link legacyBehavior href="/pros/[secret]" as={`/pros/${secret}`}>
              <a className="nav-link">Pros</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
