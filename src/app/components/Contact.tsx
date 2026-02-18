import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)


    if (isSending) return;
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,       // MUST match {{name}}
          email: formData.email,     // MUST match {{email}}
          message: formData.message, // MUST match {{message}}
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        setIsSending(false);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSending(false);
        alert('Something went wrong. Please try again.');
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '651-274-8583',
      href: 'tel:651-274-8583',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'justinthomas@jtcollectivegroup.com',
      href: 'mailto:justinthomas@jtcollectivegroup.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '7901 4th St N STE 300\nSt. Petersburg, FL 33702',
      href: 'https://maps.google.com/?q=7901+4th+St+N+STE+300+St.+Petersburg+FL+33702',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f0] via-white to-[#e8f0e8]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #5a7556 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#5a7556] mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out with no obligation —
            we'll explain everything clearly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="mb-8">
              <p className="text-xl text-gray-900 mb-2">JT Lallak</p>
              <p className="text-gray-600">CEO</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === MapPin ? '_blank' : undefined}
                    rel={
                      item.icon === MapPin
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/80 transition-colors group backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-[#5a7556]/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#5a7556]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-900 whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 border rounded-lg resize-none"
              />

              <button
                type="submit"
                disabled={isSending || isSubmitted}
                className="w-full px-8 py-4 bg-[#5a7556] text-white rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending
                  ? 'Sending...'
                  : isSubmitted
                  ? 'Message Sent!'
                  : 'Send Message'}
                {!isSubmitted && !isSending && (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
