# Responsive Navbar

Framework hasil iseng-iseng.

Navbar akan muncul dari kanan ketika hamburger menu diklik pada ukuran mobile devices.

## Responsive Breakout : 768px

Yaitu pada ukuran tablet ke bawah.

## Template

### HTML :

```html
<nav class="nav-bar">
  <h2 class="nav-brand"><a href="#home">mybrand</a></h2>
  <ul class="nav-list">
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#products">Products</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
    <li class="nav-item"><a href="#contact">Contact</a></li>
  </ul>
  <div class="hamburger"></div>
</nav>
```

### SCSS :

```scss
.nav-bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  align-items: center;
  padding: 0 clamp(1em, 3vw, 5em);
  a {
    text-decoration: none;
  }
  .nav-brand {
    a {
      color: black;
    }
  }
  .nav-list {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin-left: auto;
    transition: 0.3s;
    .nav-item {
      display: flex;
      a {
        color: #000;
        margin: auto;
      }
    }
    &.slide {
      background-color: #fff;
      box-shadow: -3px 0 5px -3px rgba(0, 0, 0, 0.5);
    }
  }
  .hamburger-line {
    background-color: #000;
  }
}
```

## Modifying

.hamburger-line = Edit tiap line pada hamburger menu
.slide = Edit .nav-list ketika muncul di mobile devices

### created with ❤ by boedegoat
