import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const models = [
  { name: "Model S", description: "A luxury electric sedan", img: "/placeholder.svg" },
  { name: "Model 3", description: "An affordable electric car", img: "/placeholder.svg" },
  { name: "Model X", description: "A luxury electric SUV", img: "/placeholder.svg" },
  { name: "Model Y", description: "A compact electric SUV", img: "/placeholder.svg" },
];

const Models = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <Card key={index}>
              <img
                width="600"
                height="400"
                src={model.img}
                alt={model.name}
                className="mx-auto rounded-xl object-cover"
              />
              <CardHeader>
                <CardTitle>{model.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;