export const Logo = ({darkMode}) => {
    return (
        <img src={darkMode ? "/x_project_sa_dark.png" : "/x_project_sa.png"} alt="X Project Logo" style={{ width: '12rem', height: 'auto' }} />
    );
};