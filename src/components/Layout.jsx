import Header from "./Header";

function Layout({ sidebar, children }) {
    return (
        <div className="app">
            <Header />
            <div className="layout">
                {sidebar}
                <main className="content">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
