import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, SVGICONS } from '../../constant/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Header from '../../layout/Header';
import Footer2 from '../../layout/Footer2';
import { Desirecategorydata, jobofferdata, partnerdata, testimonialdata, workdata } from '../../constant/alldata';

function Homepage3() {
    useEffect(() => {
        document.querySelector('div.page-wraper').setAttribute('class', 'page-wraper bg-white');
    }, []);
    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <div className="content-inner-1 main-bnr">
                    <div className="bg-circle-bx"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <h5>We Have 208,000+ Live Jobs</h5>
                                    <h1>Your <span className="text-primary">Dream</span> Job Is Waiting For You</h1>
                                    <h6>Type your keywork, then click search to find your perfect job.</h6>
                                    <div className="find-job-bx style-1">
                                        <form className="dezPlaceAni" action="category-all-jobs.html">
                                            <div className="row align-items-center find-job-bx-inner">
                                                <div className="col-sm-9 col-9  find-job-bx-inner1">
                                                    <div className="row align-items-center dz-input-group">
                                                        <div className="col-sm-6 col-6  dz-input-group-inner">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">
                                                                            {SVGICONS.search}
                                                                        </span>
                                                                    </div>
                                                                    <input type="text" className="form-control" placeholder="Job Title, Keywords" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-6  dz-input-group-inner">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-append">
                                                                        <span className="input-group-text">
                                                                            {SVGICONS.loaction}
                                                                        </span>
                                                                    </div>
                                                                    <input type="text" className="form-control" placeholder="City Or Postcode" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 col-3 find-job-bx-inner1">
                                                    <button type="submit" className="site-button btn-block">Find Job</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="dz-searches d-flex align-items-center"><h4>Popular Searches :</h4><span>Designer, Senor, Architecture, IOS, Etc.</span></div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="banner-media">
                                    <div className="banner-main-media">
                                        <img src={IMAGES.man} alt="" />
                                    </div>
                                    <div className="banner-media-bg">
                                        <div className="bnr-circle1">
                                            <img src={IMAGES.microsoftsvg} className="banner-icon1" alt="" />
                                        </div>
                                        <div className="bnr-circle2">
                                            <img src={IMAGES.googlesvg} className="banner-icon1" alt="" />
                                            <img src={IMAGES.logosvg} className="banner-icon2" alt="" />
                                            <img src={IMAGES.amazonsvg} className="banner-icon3" alt="" />
                                        </div>
                                        <div className="bnr-circle3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back-circle"></div>
                    <div className="back-circle2"></div>
                </div>
                <div className="section-full content-inner-1 partners bg-white style-1">
                    <div className="container">
                        <div className="our-partners item-center owl-loaded owl-theme owl-carousel owl-none mfp-gallery owl-dots-none">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2500,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    480: { slidesPerView: 1 },
                                    575: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    991: { slidesPerView: 4 },
                                    1200: { slidesPerView: 6 },
                                }}
                            >
                                {partnerdata.map((partner, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="item" >
                                            <Link to={"#"} className="partners-media">
                                                <img src={partner.Image} alt="" />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="section-full about-work content-inner-1 bg-white">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h6>How It Work</h6>
                            <h2 className="section-title">Follow Easy 4 Steps</h2>
                            <p>It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="row sp20  about-work-inner">
                            {workdata.map((data, i) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 m-b20 icon-wrapper" key={i}>
                                    <div className="icon-bx-wraper style-1">
                                        <div className="icon-content">
                                            <Link to={"#"} className="icon-box text-white m-b20">
                                                {data.svg}
                                            </Link>
                                            <Link to="/company-manage-job" className="dez-tilte">{data.title}</Link>
                                            <p className="dz-text">The standard chunk of used below of those interested.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="back-circle"></div>
                </div>
                <div className="section-full bg-white content-inner-1 recent-jobs">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-head style-1">
                                    <h6>Recent Job</h6>
                                    <h5 className="section-title-2">Over all 10,00+ Talented People Registered in Our Website </h5>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <Link to={"#"} className="site-button style-1">Join Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dz-job-media">
                                    <img src={IMAGES.man1} alt="" />
                                    {SVGICONS.bluebox}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-full job-category content-inner-1 bg-white">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h6>Jobs Category</h6>
                            <h2 className="section-title-3">Choose Your Desire Category </h2>
                            <p>There are many variations of passages of available, but the majority have suffered
                                some form, by injected humour, or look even slightly believable.</p>
                        </div>
                        <div className="row sp20 wrapper-spacing">
                            {Desirecategorydata.map((data, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 m-b20 job-wraper" key={i}>
                                    <Link to={"/company-manage-job"} className="job-bx-wraper">
                                        <div className="icon-content">
                                            <h5 className="job-name">{data.title}</h5>
                                            <span>{data.count}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            <div className="col-lg-3 col-md-4 col-sm-6 m-b20 job-wraper">
                                <Link to={"#"} className="site-button style-1">100+ More <br /> Category</Link>
                            </div>
                        </div>
                    </div>
                    <div className="back-circle"></div>
                    <div className="back-circle2"></div>
                </div>
                <div className="section-full latest-jobs content-inner-1 bg-white">
                    <div className="container">
                        <div className="latest-jobs-inner">
                            <div className="section-head style-1">
                                <h6>Latest Job</h6>
                                <h2 className="section-title-3">New Job Offer</h2>
                                <p className="dz-text-2">More Than +500 Job Offer Everyday</p>
                            </div>
                            <Link to={"#"} className="site-button style-1">Post a Job</Link>
                        </div>
                        <div className="row sp20 m-b20">
                            {jobofferdata.map((data, i) => (
                                <div className="col-xl-4 col-md-6" key={i}>
                                    <div className="job-wrapper m-b20">
                                        <div className="jobs-profile d-flex align-items-center">
                                            <div className="dz-icon"><img src={data.image} alt="" /></div>
                                            <div className="Profile-inner">
                                                <h5 className="profile-name">{data.title}</h5>
                                                <span className="profile-positions">{data.position}</span>
                                            </div>
                                        </div>
                                        <div className="Profile-inner-2">
                                            <p>It is a long established fact that a reader of a page when looking at its layout.</p>
                                            <div className="dz-buttons d-flex align-items-center">
                                                <Link to={"#"} className="site-button style-1">Apply Now</Link>
                                                <div className="dz-salary"><span>$560</span>/ Hour</div>
                                            </div>
                                        </div>
                                        <div className="dz-timing"><span>{data.days}</span><Link to={"#"}>Full Time</Link></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="jobs-btn">
                            <Link to={"#"} className="site-button style-1">Load More</Link>
                        </div>
                    </div>
                </div>
                <div className="section-full content-inner-2 testimonials bg-white">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6>Clents Testimonials</h6>
                            <h2 className="section-title-3">What A Job Holder Says About Us</h2>
                            <p className="dz-text-2">There are many variations of passages of available, but the majority have suffered some form, by injected humour, or look even slightly believable.</p>
                        </div>
                        <div className="review-testimonial owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-center-lr owl-btn-1 owl-dots-none owl-loaded owl-drag position-relative">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                loop={true}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 2500,
                                }}
                                navigation={{
                                    prevEl: '.owl-prev',
                                    nextEl: '.owl-next',
                                    clickable: true,
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    575: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    991: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                            >
                                {testimonialdata.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item" >
                                            <div className="testimonial-wrapper">
                                                <div className="testimonial-inner">
                                                    <div className="bg-img">
                                                        {SVGICONS.testi}
                                                    </div>
                                                    <div className="testimonial-pic style-1">
                                                        <div className="testimonial-pic-circle"></div>
                                                        <div className="profile-pic">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="profile-info">
                                                        <h5 className="profile-name">{item.title}</h5>
                                                        <span>One Year With Us</span>
                                                    </div>
                                                    <p className="dz-text-3">It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="owl-nav">
                                <div className="owl-prev"><i className="ti-angle-left" /></div>
                                <div className="owl-next"><i className="ti-angle-right" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full find-jobs">
                <div className="container">
                    <div className="find-jobs-inner">
                        <div className="section-head style-1">
                            <h3>Let’s Get Connected And Start Finding Your Dream Job</h3>
                        </div>
                        <Link to={"#"} className="site-button style-1">Click Here</Link>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}
export default Homepage3;