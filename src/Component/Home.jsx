import React from 'react'

const Home = () => {

    return (
        <div className=' w-100 h-auto p-lg-4'>
            <section className="pt-4 pt-md-11">
                <div className="container">
                    <div className="row align-items-center  align-items-end justify-content-evenly justify-content-lg-between">
                        <div className="col-12 col-md-5 order-md-2">


                            <div className="login_form_wrapper ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2 flex-column align-items-center text-lg-center">

                                            <div className="login_wrapper">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                                        <a href="#" className="btn btn-primary facebook"> <span>Login with Facebook</span> <i className="fa fa-facebook"></i> </a>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                                                        <a href="#" className="btn btn-primary google-plus"> Login  with Google <i className="fa fa-google-plus"></i> </a>
                                                    </div>
                                                </div>
                                                <h2>or</h2>
                                                <div className="formsix-pos">
                                                    <div className="form-group i-email m-lg-2">
                                                        <input type="email" className="form-control" required="" id="email2" placeholder="Email Address *" />
                                                    </div>
                                                </div>
                                                <div className="formsix-e gap-lg-1">
                                                    <div className="form-group i-password m-lg-2">
                                                        <input type="password" className="form-control" required="" id="password2" placeholder="Password *" />
                                                    </div>
                                                </div>
                                                <div className="login_remember_box mt-lg-2 gap-lg-3">
                                                    <label className="control control--checkbox gap-lg-4">Remember me
                                                        <input type="checkbox" />
                                                        <span className="control__indicator"></span>
                                                    </label>
                                                    <a href="#" className="forget_password">
                                                        Forgot Password
                                                    </a>
                                                </div>
                                                <div className="login_btn_wrapper mt-lg-2">
                                                    <a href="#" className="btn btn-primary login_btn"> Login </a>
                                                </div>
                                                <div className="login_message">
                                                    <p>Don&rsquo;t have an account ? <a href="#"> Sign up </a> </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">
                            <div className=' font-monospace '>
                                Explore Your <span className=' text-bg-[#FFFFFF]'>hobby</span> or <span>Passion</span>
                            </div>

                            <p className="lead text-center text-sm-start text-body-secondary mb-6 mb-lg-8">
                                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…

                            </p>

                            <p className="lead text-center text-sm-start text-body-secondary mb-6 mb-lg-8">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                            <div>
                                <img src="https://hobbycue.com/wp-content/uploads/2022/09/Footer-Hobby.6204f4c9.png" alt="" width={650} height={200} />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home