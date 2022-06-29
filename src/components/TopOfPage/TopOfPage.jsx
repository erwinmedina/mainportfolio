import "./TopOfPage.css";

export default function TopOfPage() {
    
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    return (
        <div className="TopOfPage">
            <div onClick={scrollToTop}>
                <img src="https://cdn-icons-png.flaticon.com/512/992/992703.png" alt="" />
            </div>
        </div>
    )
}