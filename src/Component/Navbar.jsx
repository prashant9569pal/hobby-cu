import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex bg-white align-items-center justify-content-center justify-content-xl-evenly">
      <img
        src="src\Component\HobbyCue Logo.png"
        width={293.258}
        height={60}
        className=" mx-lg-5"
      />

      <div className="container-fluid d-flex ">
        <a className="navbar-brand" href="#"></a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-lg-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item dropdown d-flex flex-row justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.03906C6.49875 2.03906 2.03906 6.49875 2.03906 12C2.03906 17.5013 6.49875 21.9609 12 21.9609C17.5013 21.9609 21.9609 17.5013 21.9609 12C21.9609 6.49875 17.5013 2.03906 12 2.03906ZM16.7405 7.83656L14.0142 13.7991C13.9706 13.8942 13.8942 13.9706 13.7991 14.0142L7.83656 16.7405C7.46953 16.9083 7.09172 16.53 7.25906 16.163L9.98531 10.2005C10.0289 10.1053 10.1053 10.0289 10.2005 9.98531L16.163 7.25906C16.53 7.09172 16.9083 7.47 16.7405 7.83656Z"
                  fill="#8064A2"
                />
                <path
                  d="M12.7355 11.8532C12.7303 11.8293 12.7242 11.8054 12.7172 11.782C12.7102 11.759 12.7017 11.7356 12.6923 11.7131C12.683 11.6906 12.6727 11.6681 12.6614 11.6465C12.6497 11.6249 12.637 11.6038 12.6234 11.5837C12.6098 11.5631 12.5953 11.5434 12.5798 11.5242C12.5644 11.5054 12.5475 11.4871 12.5302 11.4698C12.5128 11.4524 12.4945 11.4356 12.4758 11.4201C12.4566 11.4046 12.4369 11.3901 12.4163 11.3765C12.3961 11.3629 12.375 11.3502 12.3534 11.3385C12.3319 11.3273 12.3094 11.3165 12.2869 11.3076C12.2644 11.2982 12.2409 11.2898 12.218 11.2827C12.1945 11.2752 12.1706 11.2692 12.1467 11.2645C12.1223 11.2598 12.098 11.256 12.0736 11.2537C12.0248 11.2485 11.9752 11.2485 11.9264 11.2537C11.902 11.256 11.8777 11.2598 11.8533 11.2645C11.8294 11.2692 11.8055 11.2752 11.782 11.2827C11.7591 11.2898 11.7356 11.2982 11.7131 11.3076C11.6906 11.3165 11.6681 11.3273 11.6466 11.3385C11.625 11.3502 11.6039 11.3629 11.5837 11.3765C11.5631 11.3901 11.5434 11.4046 11.5242 11.4201C11.5055 11.4356 11.4867 11.4524 11.4698 11.4698C11.4525 11.4871 11.4356 11.5054 11.4202 11.5242C11.4047 11.5434 11.3897 11.5631 11.3766 11.5837C11.363 11.6038 11.3503 11.6249 11.3386 11.6465C11.3273 11.6681 11.3166 11.6906 11.3077 11.7131C11.2983 11.7356 11.2898 11.759 11.2828 11.782C11.2753 11.8054 11.2692 11.8293 11.2645 11.8532C11.2598 11.8776 11.2561 11.902 11.2538 11.9263C11.2514 11.9507 11.25 11.9756 11.25 11.9999C11.25 12.0243 11.2514 12.0492 11.2538 12.0735C11.2561 12.0979 11.2598 12.1223 11.2645 12.1467C11.2692 12.1706 11.2753 12.1945 11.2828 12.2179C11.2898 12.2409 11.2983 12.2643 11.3077 12.2868C11.3166 12.3093 11.3273 12.3318 11.3386 12.3534C11.3503 12.3749 11.363 12.396 11.3766 12.4162C11.3902 12.4368 11.4047 12.4565 11.4202 12.4757C11.4356 12.4945 11.4525 12.5127 11.4698 12.5301C11.4872 12.5474 11.5055 12.5643 11.5242 12.5798C11.5434 12.5952 11.5631 12.6098 11.5837 12.6234C11.6039 12.637 11.625 12.6496 11.6466 12.6613C11.6681 12.6726 11.6906 12.6829 11.7131 12.6923C11.7356 12.7016 11.7591 12.7101 11.782 12.7171C11.8055 12.7241 11.8294 12.7302 11.8533 12.7354C11.8777 12.7401 11.902 12.7438 11.9264 12.7462C11.9508 12.7485 11.9756 12.7499 12 12.7499C12.0244 12.7499 12.0492 12.7485 12.0736 12.7462C12.098 12.7438 12.1223 12.7401 12.1467 12.7354C12.1706 12.7302 12.1945 12.7241 12.218 12.7171C12.2409 12.7101 12.2644 12.7016 12.2869 12.6923C12.3094 12.6829 12.3319 12.6726 12.353 12.6613C12.375 12.6496 12.3961 12.637 12.4163 12.6234C12.4369 12.6098 12.4566 12.5952 12.4753 12.5798C12.4945 12.5643 12.5128 12.5474 12.5302 12.5301C12.5475 12.5127 12.5644 12.4945 12.5798 12.4757C12.5953 12.4565 12.6098 12.4368 12.6234 12.4162C12.637 12.396 12.6497 12.3749 12.6609 12.3534C12.6727 12.3318 12.683 12.3093 12.6923 12.2868C12.7017 12.2643 12.7102 12.2409 12.7172 12.2179C12.7242 12.1945 12.7303 12.1706 12.7355 12.1467C12.7402 12.1223 12.7439 12.0979 12.7463 12.0735C12.7486 12.0492 12.75 12.0243 12.75 11.9999C12.75 11.9756 12.7486 11.9507 12.7463 11.9263C12.7439 11.902 12.7402 11.8776 12.7355 11.8532Z"
                  fill="#8064A2"
                />
              </svg>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-lg-5 d-flex flex-row justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.5 3L20.7272 7.75V17.25L12.5 22L4.27276 17.25V7.75L12.5 3Z"
                  fill="#8064A2"
                />
              </svg>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hobbies
              </a>
              <ul className="dropdown-menu mx-lg-5">
                <li>
                  <a className="dropdown-item mx-2" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item mx-2" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item mx-2" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <div className="d-flex align-items-center justify-content-center mx-4">
              <i
                className="bi bi-bookmark-fill mx-2"
                height="24px"
                width="24px"
              ></i>
              <i
                className="bi bi-bell-fill mx-2"
                height="24px"
                width="24px"
              ></i>
              <i
                className="bi bi-cart-fill mx-2"
                height="24px"
                width="24px"
              ></i>
            </div>

            <form className="d-flex" role="search">
              <button className="btn btn-outline-success  mx-4" type="submit">
                Sign In
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
