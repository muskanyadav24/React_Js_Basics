const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="box-12 display-flex justify-content-between align-items-center">
                        <div className="box-2">
                            <h2>Logo</h2>
                        </div>
                        <nav className="box-10 ">
                            <ul className="display-flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        <div className="box-2 display-flex justify-content-end">
                            <button className="btn">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;