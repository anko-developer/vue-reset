<template>
  <header>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Anko</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link" active-class="active"
                  >Home</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink to="/about" class="nav-link" active-class="active"
                  >About</RouterLink
                >
              </li>
              <li class="nav-item d-flex">
                <RouterLink to="/post" class="nav-link" active-class="active"
                  >게시글</RouterLink
                >
                <button
                  class="btn btn-outline-success ms-2"
                  type="button"
                  @click="goPage"
                >
                  글쓰기
                </button>
              </li>
            </ul>
            <!-- <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goPage = () => {
  router.push({ name: 'PostsCreate' });
};
</script>

<style lang="scss" scoped></style>
