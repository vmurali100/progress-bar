import React from 'react'

export const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4 p-0" >
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ color: "FFFFFF" }}>Progress Bar</a>
                            </li>
                        </ul>
                        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                            <a class="me-3 py-2  text-decoration-none" href="#">Features</a>
                            <a class="me-3 py-2  text-decoration-none" href="#">Enterprise</a>
                            <a class="me-3 py-2  text-decoration-none" href="#">Support</a>
                        </nav>
                        <h2>This changes i am doing in Master Branch</h2>
                    </div>
                </div>
            </nav>
        </div>
    )
}
