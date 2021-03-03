# Responsive Navbar

Framework hasil iseng-iseng.

Navbar akan muncul dari kanan ketika hamburger menu diklik pada ukuran mobile devices.



## Responsive Breakout : 768px

Yaitu pada ukuran tablet ke bawah.




## Template

#### Struktur navbar
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



#### Hubungkan dengan script JS

```html
<script src="responsive-navbar/navbar.js"
```



#### Jangan lupa tambahkan @import pada main scss anda

```scss
@import 'responsive-navbar/navbar.scss'
```



## Modifying

.hamburger-line = Edit tiap line pada hamburger menu
.slide = Edit .nav-list ketika muncul di mobile devices

### created with ❤ by boedegoat
