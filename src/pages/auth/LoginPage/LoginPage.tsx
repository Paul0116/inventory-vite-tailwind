import LoginForm from "../../../components/forms/LoginForm";
import Logo from "../../../assets/image.png";

const LoginPage = () => {
  return (
    <div className="flex flex-wrap min-h-screen w-full">
      {/* Left side - Login Form y*/}
      <div className="bg-white w-full md:w-1/2 flex flex-col mb-10">
        {/* Logo */}
        <div className="p-6 flex justify-start">
          <img src={Logo} alt="Logo" className="w-1xl" />
        </div>

        {/* Login Form */}
        <div className="flex-1 flex items-center justify-center px-8">
          <LoginForm />
        </div>
      </div>

      <div className="bg-[#003e50] w-full md:w-1/2">
        {/* You can add additional content here */}
        <div className="flex-1 flex items-center justify-center px-8 py-44">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Inventory Management
            </h2>
            <p className="text-white text-sm mb-8">
              Join our platform to steamline your inventory process. reducuce
              costs and enhance productivity.
            </p>
            <div className="grid grid-cols-1 gap-4 text-left">
              {[
                "Real-time inventory tracking",
                "Automated stock alerts",
                "Advanced reporting tools",
                "Multi-location support",
              ].map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
