const SignUp = () => {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md">
                <h1 className="text-3xl font-bold self-center">Create an account</h1>

                <span className="self-center">
                    Already have an account?&nbsp;&nbsp;
                    <a className="link link-secondary hover:font-bold">Log in</a>
                </span>

                <a className="btn btn-neutral hover:bg-neutral-content">
                    <i className="fa-brands fa-google text-primary"></i>
                    Create with Google
                </a>

                <div className="divider my-0">OR</div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">First Name</span>
                    </div>

                    <input className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Last Name</span>
                    </div>

                    <input className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>

                    <input className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>

                    <input type="password" className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Confirm password</span>
                    </div>

                    <input type="password" className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Gender</span>
                    </div>

                    <select className="select select-bordered">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Age</span>
                    </div>

                    <input type="number" className="input input-bordered"/>
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">About</span>
                    </div>

                    <textarea className="textarea textarea-bordered"></textarea>
                </label>

                <div className="form-control">
                    <label className="cursor-pointer label self-start gap-2">
                        <input type="checkbox" className="checkbox"/>
                        <span className="label-text">
                            I accept the
                            <a className="link link-accent">&nbsp;&nbsp;Terms and Conditions</a>
                        </span>
                    </label>
                </div>

                <button className="btn btn-primary">Create</button>
            </div>
        </div>
    );
}

export default SignUp;