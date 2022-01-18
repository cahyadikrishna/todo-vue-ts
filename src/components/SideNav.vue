<template>
  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <router-link class="nav-link" to="/dashboard">
          <div class="sb-nav-link-icon">
            <i class="fas fa-tachometer-alt"></i>
          </div>
          Dashboard
        </router-link>
        <router-link class="nav-link" to="/todolist">
          <div class="sb-nav-link-icon">
            <i class="fas fa-check"></i>
          </div>
          My Todo
        </router-link>
      </div>
    </div>
    <div class="sb-sidenav-footer">
      <div class="small">Logged in as:</div>
      Start Bootstrap
    </div>
  </nav>
</template>
