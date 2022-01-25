
function NavBar() {
return <div>
    <nav id="menu" className="navbar navbar-expand-lg navbar-light  ">
				<div className="container nv">
					<button type="button" className="navbar-toggler" data-bs-toggle="collapse"
						data-bs-target="MenuNavegacion" aria-controls="navbarnav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div id="MenuNavegacion" className="collapse navbar-collapse max-height ">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
									role="button" data-bs-toggle="dropdown">Alimento</a>
								<ul className="dropdown-menu">
									<li><a href="#" class="dropdown-item">Alimento seco</a></li>
									<li><a href="#" className="dropdown-item">Alimento Humedo</a></li>
									<li><a className="dropdown-item" href="#">Alimentos medicados</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
									href="#" role="button"
									data-bs-toggle="dropdown">Accesorios</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#"> Juguetes </a> </li>
									<li><a className="dropdown-item" href="#"> camas y cuchas </a> </li>
									<li><a className="dropdown-item" href="#"> comederos y bebederos </a>
									</li>
									<li><a className="dropdown-item" href="#"> elementos de paseos </a>
									</li>
									<li><a className="dropdown-item" href="#"> rascadores </a> </li>
									<li><a className="dropdown-item" href="#"> transportadoras </a> </li>
								</ul>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
									role="button" data-bs-toggle="dropdown">Golosinas</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">snacks secas</a></li>
									<li><a className="dropdown-item" href="#">huesos y cueros</a></li>
									<li><a className="dropdown-item" href="#">snacks cat</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
									href="#" role="button"
									data-bs-toggle="dropdown">Indumentaria</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#"> capas </a> </li>
									<li><a className="dropdown-item" href="#"> capas de lluvia </a>
									</li>
									<li><a className="dropdown-item" href="#"> botitas </a> </li>
								</ul>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
									href="#" role="button" data-bs-toggle="dropdown">Estética e
									Higiene</a>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">cepillos, guantes y
											cardinas</a> </li>
									<li><a className="dropdown-item" href="#">cortauñas</a> </li>
									<li><a className="dropdown-item" href="#">cuidado dental</a>
									</li>
									<li><a className="dropdown-item" href="#">repelentes</a> </li>
									<li><a className="dropdown-item" href="#">shampoo y
											acondicionador </a> </li>
									<li><a className="dropdown-item" href="#">elementos sanitarios
										</a> </li>
								</ul>
							</li>
						</ul>
					</div>
				</div>

			</nav>
</div>;
}

export default NavBar;
