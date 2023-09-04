const Footer = () => {

  return (
    <div>
      <footer className="footer p-10 py-40 bg-[#0F0F0F] text-base-content  ">
        <nav>
          <header className=" text-white  text-2xl font-bold">Services</header>
          <a className="link link-hover text-white text-lg">Branding</a>
          <a className="link link-hover text-white text-lg">Design</a>
          <a className="link link-hover text-white text-lg">Marketing</a>
          <a className="link link-hover text-white text-lg">Advertisement</a>
        </nav>
        <nav>
          <header className="text-white  text-2xl font-bold">Company</header>
          <a className="link link-hover text-white text-lg  ">About us</a>
          <a className="link link-hover text-white text-lg">Contact</a>
          <a className="link link-hover text-white text-lg">Jobs</a>
          <a className="link link-hover text-white text-lg">Press kit</a>
        </nav>
        <nav>
          <header className="text-white  text-2xl font-bold">Legal</header>
          <a className="link link-hover text-white text-lg">Terms of use</a>
          <a className="link link-hover text-white text-lg">Privacy policy</a>
          <a className="link link-hover text-white text-lg">Cookie policy</a>
        </nav>
        <form>
          <header className=" text-white text-lg">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white text-lg">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
