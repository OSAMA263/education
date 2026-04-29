import { useState } from "react";
import { Button, Input, Textarea } from "@chakra-ui/react";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = () => {
    if (!formData.subject || !formData.message) return;

    setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-center text-green-600">
        Your message has been sent! We'll get back to you soon.
      </div>
    );

  return (
    <div className="mt-8 text-center space-y-6 w-[80%] mx-auto mb-1!">
      <h3 className="mb-1 text-xl font-semibold text-white">
        Report an Issue or Contact Us
      </h3>
      <p className="mb-5 text-sm text-gray-400">
        Having trouble with this lesson or an exam? Send us a message.
      </p>

      <div className="flex flex-col gap-4">
        <Input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          variant="subtle"
          rounded="lg"
        />
        <Textarea
          name="message"
          placeholder="Describe your issue or question..."
          value={formData.message}
          onChange={handleChange}
          variant="subtle"
          rounded="lg"
          rows={4}
          resize="none"
        />
        <Button
          rounded="xl"
          variant="surface"
          alignSelf="center"
          onClick={handleSubmit}
          disabled={!formData.subject || !formData.message}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
