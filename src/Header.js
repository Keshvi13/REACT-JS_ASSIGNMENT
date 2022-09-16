import {Link} from 'react-router-dom';

export default function Header(){
return(
    <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Header</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/printers">All Printers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/printer/create">Create Printers</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href={"/printers"}>UPDATE PRINTERS</a></li>
            <li><a class="dropdown-item" href={"/printers"}>DELETE PRINTERS</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/printer/create">CREATE PRINTERS</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
)
}