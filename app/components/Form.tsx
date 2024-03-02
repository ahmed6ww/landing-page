const Form = () => {
  return (
    <div className="hero min-h-[40em] bg-black ">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="text-center lg:text-left lg:ml-20 xl:ml-32 ">
          <h1 className="text-4xl md:text-5xl text-primary font-semibold ">
            STAY UP TO DATE WITH ALL THE LATEST NEWS
          </h1>
          <p className="py-6 text-secondary font-sans">
            SIGN UP BELOW TO RECEIVE ALL THE LATEST UPDATES FROM BENEFIT MINE HQ
          </p>
        </div>
        <div className="card shrink-0 w-full  flex  max-w-sm shadow-2xl border text-secondary border-primary">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-black border-secondary"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn border-primary bg-black text-secondary hover:bg-primary hover:border-primary hover:text-black">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
