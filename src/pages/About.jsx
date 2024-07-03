const About = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-8">
          We are passionate about cars and committed to providing the best car models for our customers.
        </p>
        <img
          width="600"
          height="400"
          src="/placeholder.svg"
          alt="About Us"
          className="mx-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;