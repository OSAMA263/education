import SectionHeader from "@/components/shared/SectionHeader";
import { Button, Field, Input } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <div className="space-y-6">
      <SectionHeader
      className="lg:text-start"
        title="We’d Love to Hear From You"
        par=" Whether you have a question, a suggestion, or just want to say hello,
        we’re here for you. Our support team is available every day to ensure
        your experience on EduSphere is smooth and enjoyable. Fill out the form
        below, or reach us directly through any of our contact channels."
      />

      <form className="space-y-6">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input required placeholder="Enter your subject" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Message</Field.Label>
          <Input required placeholder="Enter your message" />
        </Field.Root>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
