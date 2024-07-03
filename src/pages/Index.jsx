import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <header className="relative w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
        <img
          width="1920"
          height="1080"
          src="/placeholder.svg"
          alt="Car Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Car World</h1>
          <p className="text-xl mb-8">Discover the best car models with us</p>
          <Button variant="primary" size="lg">Explore Models</Button>
        </div>
      </header>
    </div>
  );
};

export default Index;