import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/theme";
import Countdown from 'react-countdown';

function ComingSoon() {
    const targetDate = new Date('2025-05-01T23:59:59');
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="countdown d-flex mb-4 third">
                <div className="third1">
                    <div className="number text-primary">{days}</div>
                    <div className="label text-white">DAYS</div>
                </div>
                <div className="third1">
                    <div className="number text-primary">{hours}</div>
                    <div className="label text-white">HOURS</div>
                </div>
                <div className="third1">
                    <div className="number text-primary">{minutes}</div>
                    <div className="label text-white">MINUTES</div>
                </div>
                <div className="third1">
                    <div className="number text-primary">{seconds}</div>
                    <div className="label text-white">SECONDS</div>
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="coming-soon" style={{ backgroundImage: `url( ${IMAGES.bg02} )`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="main">
                    <div className="mb-4 first">
                        <Link to={"/"} className="text-primary">JobBoard</Link>
                    </div>
                    <div className="mb-4 pt-5 second">
                        <h1 className="fw-bold text-white">LAUNCHING</h1>
                        <h2 className="text-white">VERY SOON.</h2>
                    </div>
                    <Countdown date={targetDate} renderer={renderer} />
                    <div className="d-flex fourth">
                        <Link to={"https://www.facebook.com/"} target="_blank" className="text-white mx-2"><i className="fa fa-facebook fa-2x" /></Link>
                        <Link to={"https://twitter.com/"} target="_blank" className="text-white mx-2"><i className="fa fa-twitter fa-2x" /></Link>
                        <Link to={"https://www.google.com/"} target="_blank" className="text-white mx-2"><i className="fa fa-google-plus fa-2x" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComingSoon;