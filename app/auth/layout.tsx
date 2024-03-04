const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-screen bg-gradient-to-tr from-[#61d7dd] to-[#df39f5] flex justify-center items-center">
            {children}
        </div>
    );
};

export default Layout;
