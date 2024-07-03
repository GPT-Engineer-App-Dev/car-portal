import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">We would love to hear from you!</p>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <Button type="submit" variant="primary" size="lg">Send Message</Button>
        </form>
        <div className="mt-8">
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Car St, Auto City, CA 12345</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;