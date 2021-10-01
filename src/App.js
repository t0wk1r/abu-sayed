import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <body class="theme-dark">
        <div class="preloader">
          <div class="preloader-block">
            <div class="preloader-icon"><span class="loading-dot loading-dot-1"></span><span class="loading-dot loading-dot-2"></span><span class="loading-dot loading-dot-3"></span></div>
          </div>
        </div>
        <div id="overlay-effect"></div>

        <nav class="navbar-expand-md navbar fixed-top" id="navbar"><a class="navbar-brand" data-scroll="" href="#home-area">

          <img class="img-fluid" src="img/img-kitzu-logo.png" alt="Logo" /></a>
          <span class="navbar-menu ml-auto" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" role="button"><span class="btn-line"></span></span>
          <div class="collapse navbar-collapse order-1 order-lg-0" id="navbarSupportedContent">

            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li>
              <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
              <li class="nav-item"><a class="nav-link" href="#blog">Blog</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>

        <section class="home-area element-cover-bg" id="home" style={{ backgroundImage: 'url(img/home.jpg)' }}>
          <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
              <div class="col-12 col-lg-8 home-content text-center">
                <h1 class="home-name">Abu <span>Sayed</span></h1>
                <h4 class="cd-headline clip home-headline">I’m a <span class="cd-words-wrapper single-headline"><b class="is-visible">Developer</b><b>Designer</b><b>Freelancer</b></span></h4>
              </div>
            </div>
          </div>
          <div class="fixed-wrapper">

            <div class="fixed-block block-left">
              <ul class="list-unstyled languages-list">
                <li><a href="#0"><span class="single-language">ENG</span></a></li>
                <li><a href="#0"><span class="single-language">JAP</span></a></li>
              </ul>
            </div>

            <div class="fixed-block block-right">
              <ul class="list-unstyled social-icons">
                <li><a href="#0"><i class="icon ion-logo-twitter"></i></a></li>
                <li><a href="#0"><i class="icon ion-logo-facebook"></i></a></li>
                <li><a href="#0"><i class="icon ion-logo-linkedin"></i></a></li>
                <li><a href="#0"><i class="icon ion-logo-github"></i></a></li>
                <li><a href="#0"><i class="icon ion-logo-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </section>

        <div class="lightbox-wrapper" id="about" data-simplebar>
          <div class="container">
            <div class="lightbox-close">
              <div class="close-btn" data-modal-close=""><span class="btn-line"></span></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="lightbox-content">
                  <div class="row">
                    <div class="col-12">
                      <div class="section-heading page-heading">
                        <p class="section-description">Get to know me</p>
                        <h2 class="section-title">About Me</h2>
                        <div class="animated-bar"></div>
                      </div>
                    </div>
                  </div>

                  <div class="info-section single-section">
                    <div class="row align-items-center">

                      <div class="col-12 col-lg-5 info-img"><img class="img-fluid img-thumbnail" src="img/info-img.jpg" alt="About Picture" /></div>

                      <div class="col-12 col-lg-7 info-content">
                        <div class="content-block">
                          <h2 class="content-subtitle">Who am i?</h2>
                          <h6 class="content-title">I'm Abu Sayed, a visual UX/UI Designer and Web Developer</h6>
                          <div class="content-description">
                            <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                          </div>
                          <address class="content-info">
                            <div class="row">
                              <div class="col-12 col-md-6 single-info"><span>Name:</span>
                                <p>Abu Sayed</p>
                              </div>
                              <div class="col-12 col-md-6 single-info"><span>Email:</span>
                                <p><a href="mailto:towkir29@example.com">towkir29@example.com</a></p>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12 col-md-6 single-info"><span>Age:</span>
                                <p>27</p>
                              </div>
                              <div class="col-12 col-md-6 single-info"><span>From:</span>
                                <p>Rajshahi, Bangladesh</p>
                              </div>
                            </div>
                          </address>
                          <div class="d-block d-sm-flex align-items-center"><a class="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a>
                            <ul class="list-unstyled list-inline content-follow">
                              <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-twitter"></i></a></li>
                              <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-instagram"></i></a></li>
                              <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-linkedin"></i></a></li>
                              <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-github"></i></a></li>
                              <li class="list-inline-item"><a href="#0"><i class="icon ion-logo-facebook"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="services-section single-section">
                    <div class="row">
                      <div class="col-12">
                        <div class="section-heading">
                          <p class="section-description">Services i offer to my clients</p>
                          <h2 class="section-title">My Services</h2>
                        </div>
                      </div>
                    </div>
                    <div class="row">

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-logo-css3"></i>
                          <h6 class="service-title">Design Trends</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-md-images"></i>
                          <h6 class="service-title">PSD Design</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-logo-ionic"></i>
                          <h6 class="service-title">Customer Support</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-logo-wordpress"></i>
                          <h6 class="service-title">Web Development</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-md-move"></i>
                          <h6 class="service-title">Fully Responsive</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4">
                        <div class="single-service"><i class="icon service-icon ion-ios-rocket"></i>
                          <h6 class="service-title">Branding</h6>
                          <p class="service-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="testimonials-section single-section">
                    <div class="row">
                      <div class="col-12">
                        <div class="section-heading">
                          <p class="section-description">What my clients think about me</p>
                          <h2 class="section-title">Testimonials</h2>
                        </div>
                      </div>
                    </div>
                    <div class="my-slider">
                      <div class="slider-item">

                        <div class="single-review swiper-slide">
                          <div class="review-header d-flex justify-content-between">
                            <div class="review-client">
                              <div class="media"><img class="img-fluid rounded-circle client-avatar" src="img/client-1.jpg" alt="Client" />
                                <div class="client-details">
                                  <h6 class="client-name">Julia Sakura</h6><span class="client-role">Envato Customer</span>
                                </div>
                              </div>
                            </div><i class="icon ion-md-quote review-icon"></i>
                          </div>
                          <p class="review-content">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</p>
                        </div>
                      </div>
                      <div class="slider-item">

                        <div class="single-review swiper-slide">
                          <div class="review-header d-flex justify-content-between">
                            <div class="review-client">
                              <div class="media"><img class="img-fluid rounded-circle client-avatar" src="img/client-2.jpg" alt="Client" />
                                <div class="client-details">
                                  <h6 class="client-name">John Santana</h6><span class="client-role">Entrepreneur</span>
                                </div>
                              </div>
                            </div><i class="icon ion-md-quote review-icon"></i>
                          </div>
                          <p class="review-content">Sayed did an excellent creative job, addressing our request quickly, and also providing his own graphic insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.</p>
                        </div>
                      </div>
                      <div class="slider-item">

                        <div class="single-review swiper-slide">
                          <div class="review-header d-flex justify-content-between">
                            <div class="review-client">
                              <div class="media"><img class="img-fluid rounded-circle client-avatar" src="img/client-3.jpg" alt="Client" />
                                <div class="client-details">
                                  <h6 class="client-name">Maria Wilson</h6><span class="client-role">Envato Customer</span>
                                </div>
                              </div>
                            </div><i class="icon ion-md-quote review-icon"></i>
                          </div>
                          <p class="review-content">Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pricing-section single-section">
                    <div class="row">
                      <div class="col-12">
                        <div class="section-heading">
                          <p class="section-description">Get started with my services</p>
                          <h2 class="section-title">Choose a Plan</h2>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">

                      <div class="col-lg-4">
                        <div class="single-plan mb-4 mb-sm-5"><i class="plan-icon icon ion-md-egg"></i>
                          <h3 class="plan-type">Standard</h3>
                          <h2 class="plan-price">$19/month</h2>
                          <ul class="list-unstyled plan-list">
                            <li>Mobile App Design</li>
                            <li>Responsive Design</li>
                            <li>Database Development</li>
                            <li>Web Design</li>
                            <li>24/7 Support</li>
                          </ul><a class="btn button-main button-scheme plan-btn" href="#0" role="button">Get Standard</a>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="single-plan mb-4 mb-sm-5"><i class="plan-icon icon ion-ios-rocket"></i>
                          <h3 class="plan-type">Professional</h3>
                          <h2 class="plan-price">$29/month</h2>
                          <ul class="list-unstyled plan-list">
                            <li>Mobile App Design</li>
                            <li>Responsive Design</li>
                            <li>Database Development</li>
                            <li>Web Design</li>
                            <li>24/7 Support</li>
                          </ul><a class="btn button-main button-scheme plan-btn" href="#0" role="button">Get Pro</a>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="single-plan mb-4 mb-sm-5"><i class="plan-icon icon ion-logo-ionic"></i>
                          <h3 class="plan-type">Business</h3>
                          <h2 class="plan-price">$39/month</h2>
                          <ul class="list-unstyled plan-list">
                            <li>Mobile App Design</li>
                            <li>Responsive Design</li>
                            <li>Database Development</li>
                            <li>Web Design</li>
                            <li>24/7 Support</li>
                          </ul><a class="btn button-main button-scheme plan-btn" href="#0" role="button">Get Business</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lightbox-wrapper" id="resume" data-simplebar>
          <div class="container">
            <div class="lightbox-close">
              <div class="close-btn" data-modal-close=""><span class="btn-line"></span></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="lightbox-content">
                  <div class="row">
                    <div class="col-12">
                      <div class="section-heading page-heading">
                        <p class="section-description">Check out my Resume</p>
                        <h2 class="section-title">Resume</h2>
                        <div class="animated-bar"></div>
                      </div>
                    </div>
                  </div>

                  <div class="resume-section single-section">
                    <div class="row">

                      <div class="col-12 col-md-6">
                        <div class="col-block education">
                          <h3 class="col-title">Education</h3>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">Computer Science</h5><span class="item-details">Cambridge University / 2004 - 2007</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">Bachelor Degree</h5><span class="item-details">University of Tokyo / 2008 - 2010</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">Master Degree</h5><span class="item-details">Harvard University / 2012 - 2015</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6">
                        <div class="col-block experience">
                          <h3 class="col-title">Experience</h3>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">Software Engineer</h5><span class="item-details">Adobe / 2015 - 2017</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">Back-End Developer</h5><span class="item-details">Google / 2017 - 2018</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                          <div class="resume-item"><span class="item-arrow"></span>
                            <h5 class="item-title">UI/UX Designer</h5><span class="item-details">Discord / 2019 - Present</span>
                            <p class="item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="skills-section single-section">
                    <div class="row">
                      <div class="col-12">
                        <div class="section-heading">
                          <p class="section-description">My level of knowledge in some tools</p>
                          <h2 class="section-title">My Skills</h2>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="single-skill" data-percentage="95">
                          <div class="skill-info"><span class="skill-name">HTML/CSS</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="single-skill" data-percentage="80">
                          <div class="skill-info"><span class="skill-name">Web Design</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="single-skill" data-percentage="90">
                          <div class="skill-info"><span class="skill-name">JavaScript</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="single-skill" data-percentage="90">
                          <div class="skill-info"><span class="skill-name">React JS</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="single-skill" data-percentage="95">
                          <div class="skill-info"><span class="skill-name">Express.js</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                        <div class="single-skill" data-percentage="80">
                          <div class="skill-info"><span class="skill-name">TypeScript</span><span class="skill-percentage"></span></div>
                          <div class="progress skill-progress">
                            <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="video-section single-section">
                    <div class="row align-items-center">
                      <div class="col-12 col-lg-6 content-part">
                        <h3 class="video-title">Take a tour of my office</h3>
                        <p class="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</p>
                        <p class="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
                      </div>
                      <div class="col-12 col-lg-6 video-part"><a class="media-lightbox" href="https://www.youtube.com/watch?v=doteMqP6eSc" data-lightbox>
                        <div class="embed-responsive embed-responsive-16by9">
                          <div class="embed-responsive-item element-cover-bg"><span class="play-wrapper"><i class="icon ion-md-play"></i></span></div>
                        </div>
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lightbox-wrapper" id="portfolio" data-simplebar>
          <div class="container">
            <div class="lightbox-close">
              <div class="close-btn" data-modal-close=""><span class="btn-line"></span></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="lightbox-content">
                  <div class="row">
                    <div class="col-12">
                      <div class="section-heading page-heading">
                        <p class="section-description">Showcasing some of my best work</p>
                        <h2 class="section-title">Portfolio</h2>
                        <div class="animated-bar"></div>
                      </div>
                    </div>
                  </div>

                  <div class="portfolio-section single-section">
                    <div class="row">

                      <div class="col-12">
                        <ul class="list-inline filter-control" role="group" aria-label="Filter Control">
                          <li class="list-inline-item tab-active" data-filter="*">All</li>
                          <li class="list-inline-item" data-filter=".brand">Brand</li>
                          <li class="list-inline-item" data-filter=".design">Design</li>
                          <li class="list-inline-item" data-filter=".photos">Photos</li>
                        </ul>
                      </div>
                    </div>

                    <div class="portfolio-grid row">

                      <div class="single-item col-6 col-lg-4 design"><a class="portfolio-item" href="img/item-1.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-1.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">Label Tag Mockup</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>

                      <div class="single-item col-6 col-lg-4 photos"><a class="portfolio-item" href="img/item-2.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-2.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">3D Bag Mockup</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>

                      <div class="single-item col-6 col-lg-4 design"><a class="portfolio-item" href="img/item-3.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-3.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">Modern Bag Design</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>

                      <div class="single-item col-6 col-lg-4 brand"><a class="portfolio-item" href="img/item-4.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-4.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">Coffee Cup Design</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>

                      <div class="single-item col-6 col-lg-4 brand"><a class="portfolio-item" href="img/item-5.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-5.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">T-Shirt Design</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>

                      <div class="single-item col-6 col-lg-4 photos"><a class="portfolio-item" href="img/item-6.jpg" data-lightbox>
                        <div class="portfolio-wrapper"><img class="img-fluid" alt="Item" src="img/item-6.jpg" />
                          <div class="item-content">
                            <h6 class="content-title">Packaging Box Mockup</h6><span class="content-more">More Info</span>
                          </div>
                        </div>
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lightbox-wrapper" id="blog" data-simplebar>
          <div class="container">
            <div class="lightbox-close">
              <div class="close-btn" data-modal-close=""><span class="btn-line"></span></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="lightbox-content">
                  <div class="row">
                    <div class="col-12">
                      <div class="section-heading page-heading">
                        <p class="section-description">Check out my latest blog posts</p>
                        <h2 class="section-title">My Blog</h2>
                        <div class="animated-bar"></div>
                      </div>
                    </div>
                  </div>

                  <div class="blog-section single-section">
                    <div class="row justify-content-center">

                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-1.jpg" alt="Blog post" /><span class="content-date">11 Dec, 20</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">Top tools for Photographers</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-2.jpg" alt="Blog post" /><span class="content-date">12 Aug, 20</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">Take a tour of my office</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-3.jpg" alt="Blog post" /><span class="content-date">4 Feb, 20</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">How i became a Web Designer</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-4.jpg" alt="Blog post" /><span class="content-date">11 Dec, 19</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">How to improve work performance</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-5.jpg" alt="Blog post" /><span class="content-date">15 Nov, 19</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">How to work from home</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-sm-8 col-lg-4">
                        <div class="card single-post"><a class="post-img" href="#0"><img class="card-img-top" src="img/post-6.jpg" alt="Blog post" /><span class="content-date">8 Aug, 19</span></a>
                          <div class="card-body post-content"><a href="#0">
                            <h5 class="card-title content-title">How to enjoy your business trip</h5>
                          </a>
                            <p class="card-text content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lightbox-wrapper" id="contact" data-simplebar>
          <div class="container">
            <div class="lightbox-close">
              <div class="close-btn" data-modal-close=""><span class="btn-line"></span></div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="lightbox-content">
                  <div class="row">
                    <div class="col-12">
                      <div class="section-heading page-heading">
                        <p class="section-description">Feel free to contact me anytimes</p>
                        <h2 class="section-title">Get in Touch</h2>
                        <div class="animated-bar"></div>
                      </div>
                    </div>
                  </div>

                  <div class="contact-section single-section">
                    <div class="row">

                      <div class="col-12 col-lg-7">
                        <form class="contact-form" id="contact-form" action="http://exill.dk/demo/kitzu/template/php/contact.php">
                          <h4 class="content-title">Message Me</h4>
                          <div class="row">
                            <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Name" required="" /></div>
                            <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Email" required="" /></div>
                            <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required="" /></div>
                            <div class="col-12 form-group form-message"><textarea class="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required=""></textarea></div>
                            <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Send Message</button>
                              <p class="contact-feedback"></p>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div class="col-12 col-lg-5">
                        <div class="contact-info">
                          <h4 class="content-title">Contact Info</h4>
                          <p class="info-description">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                          <ul class="list-unstyled list-info">
                            <li>
                              <div class="media align-items-center"><span class="info-icon"><i class="icon ion-logo-ionic"></i></span>
                                <div class="media-body info-details">
                                  <h6 class="info-type">Name</h6><span class="info-value">Abu Sayed</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="media align-items-center"><span class="info-icon"><i class="icon ion-md-map"></i></span>
                                <div class="media-body info-details">
                                  <h6 class="info-type">Location</h6><span class="info-value">Nowdapara, Rajshahi, Bangladesh.</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="media align-items-center"><span class="info-icon"><i class="icon ion-md-call"></i></span>
                                <div class="media-body info-details">
                                  <h6 class="info-type">Call Me</h6><span class="info-value"><a href="tel:+8801969663344">+880 1969 663344</a></span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="media align-items-center"><span class="info-icon"><i class="icon ion-md-send"></i></span>
                                <div class="media-body info-details">
                                  <h6 class="info-type">Email Me</h6><span class="info-value"><a href="mailto:towkir29@example.com">towkir29@example.com</a></span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-tool">
          <div class="tool-wrapper">
            <span class="tool-toggler"><i class="icon ion-md-settings"></i></span>
            <div class="tool-box">
              <ul class="list-inline single-block color-switcher">
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#2c31ff' }}
                  data-path="css/colors/main-blueviolet.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#3460D1' }}
                  data-path="css/colors/main-nightskyblue.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#EE3158' }}
                  data-path="css/colors/main-redpink.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#007bff' }}
                  data-path="css/colors/main-blue.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#17a2b8' }}
                  data-path="css/colors/main-cyan.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#3365b0' }}
                  data-path="css/colors/main-darkblue.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#a435b7' }}
                  data-path="css/colors/main-darkmagenta.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#c93e70' }}
                  data-path="css/colors/main-darkpink.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#bf2a3d' }}
                  data-path="css/colors/main-darkred.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#28a745' }}
                  data-path="css/colors/main-green.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#6610f2' }}
                  data-path="css/colors/main-indigo.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#fd7e14' }}
                  data-path="css/colors/main-orange.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#e83e8c' }}
                  data-path="css/colors/main-pink.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#6f42c1' }}
                  data-path="css/colors/main-purple.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#dc3545' }}
                  data-path="css/colors/main-red.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: ' #20c997' }}
                  data-path="css/colors/main-teal.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#333' }}
                  data-path="css/colors/main-dark.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#78b230' }}
                  data-path="css/colors/main-yellowgreen.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#E16F7C' }}
                  data-path="css/colors/main-tangopink.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#6F73D2' }}
                  data-path="css/colors/main-moodyblue.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#664C43' }}
                  data-path="css/colors/main-brown.css"></li>
                <li class="list-inline-item" style=
                  {{ backgroundColor: '#4770D9' }}
                  data-path="css/colors/main-royalblue.css"></li>
                <li class="list-inline-item" style={{ backgroundColor: '#ffb100' }} data-path="css/colors/main-darkyellow.css"></li>
              </ul>
              <div class="single-block buy-btn mb-0">
                <a class="btn btn-success btn-sm" target="_blank" href="#" role="button">Live Chat</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
