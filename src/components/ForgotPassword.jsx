const ForgotPassword = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-6 rounded-box bg-base-200 p-6 max-w-md text-center">
                <h1 className="text-2xl font-bold">Forgot password?</h1>

                <span>
        Remember your password?
        <a className="link link-secondary">Log in here</a>
    </span>


                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>

                    <input type="email" className="input input-bordered"/>
                </label>

                <button className="btn btn-primary">Reset password</button>
            </div>
            </div>
        </>
    );
}