import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import { dzPost, widgetPost } from '../constant/alldata';

function Sidebar() {
	return (
		<aside className="side-bar">
			<div className="widget">
				<h6 className="widget-title style-1">Search</h6>
				<div className="search-bx style-1">
					<form role="search" method="post">
						<div className="input-group">
							<input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
							<span className="input-group-btn">
								<button type="submit" className="fa fa-search text-primary"></button>
							</span>
						</div>
					</form>
				</div>
			</div>
			<div className="widget recent-posts-entry">
				<h6 className="widget-title style-1">Recent Posts</h6>
				<div className="widget-post-bx">
					{widgetPost.map((item, index) => (
						<div className="widget-post clearfix" key={index}>
							<div className="dez-post-media">
								<img src={item.image} width="200" height="143" alt="" />
							</div>
							<div className="dez-post-info">
								<div className="dez-post-header">
									<h6 className="post-title"><Link to={"/blog-details"}></Link>{item.title}</h6>
								</div>
								<div className="dez-post-meta">
									<ul className="d-flex align-items-center">
										<li className="post-date"><i className="fa fa-calendar" />Sep 18, 2025</li>
										<li className="post-comment"><Link to={'#'}><i className="fa fa-comments-o" />5k</Link></li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="widget widget_gallery gallery-grid-3">
				<h6 className="widget-title style-1">Our services</h6>
				<ul>
					<LightGallery
						speed={500}
						zoom={true}
						thumbnail={true}
						autoplay={true}
						autoplayDelay={3000}
						plugins={[lgThumbnail, lgZoom, lgAutoplay]}
						selector='.lightimg'
					>
						{dzPost.map((item, index) => (
							<li key={index}>
								<div className="dez-post-thum">
									<Link to={item.image} className="dez-img-effect zoom-slow lightimg">
										<img src={item.image} alt="" />
									</Link>
								</div>
							</li>
						))}
					</LightGallery>
				</ul>
			</div>
			<div className="widget widget_archive">
				<h6 className="widget-title style-1">Categories List</h6>
				<ul>
					<li><Link to={"#"}>aciform</Link></li>
					<li><Link to={"#"}>championship</Link></li>
					<li><Link to={"#"}>chastening</Link></li>
					<li><Link to={"#"}>clerkship</Link></li>
					<li><Link to={"#"}>disinclination</Link></li>
				</ul>
			</div>
			<div className="widget widget-newslatter">
				<h6 className="widget-title style-1">Newsletter</h6>
				<div className="news-box">
					<p>Enter your e-mail and subscribe to our newsletter.</p>
					<form className="dzSubscribe" action="script/mailchamp.php" method="post">
						<div className="dzSubscribeMsg"></div>
						<div className="input-group">
							<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
							<button name="submit" value="Submit" type="submit" className="site-button btn-block">Subscribe Now</button>
						</div>
					</form>
				</div>
			</div>
		</aside>
	)
}
export default Sidebar;