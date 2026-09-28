import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section } from '@components/common';
import { FormInput } from '@components/ui';
import { Button } from '@components/common';
import { useLocalStorage } from '@hooks';

const contactSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email address'),
  company: yup.string().optional(),
  service: yup.string().required('Please select a service').oneOf(['digital', 'social', 'production', 'multiple', 'unsure']),
  message: yup.string().required('Message is required').min(20, 'Message must be at least 20 characters'),
  budget: yup.string().optional(),
});

const serviceOptions = [
  { value: 'digital', label: 'Digital Services' },
  { value: 'social', label: 'Social Media Services' },
  { value: 'production', label: 'Professional Production' },
  { value: 'multiple', label: 'Multiple Services' },
  { value: 'unsure', label: 'Not Sure Yet' },
];

const budgetOptions = [
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-5k', label: '$1,000 - $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-plus', label: '$10,000+' },
];

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draft, setDraft] = useLocalStorage('contact-form-draft', {});

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: draft || {},
    mode: 'onChange',
  });

  const watchedValues = watch();

  const saveDraft = (values) => {
    setDraft(values);
  };

  const handleChange = (name, value) => {
    setValue(name, value, { shouldValidate: true });
    saveDraft({ ...watchedValues, [name]: value });
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setDraft({});
      setValue('name', '');
      setValue('email', '');
      setValue('company', '');
      setValue('service', '');
      setValue('message', '');
      setValue('budget', '');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section spacing="large" aria-labelledby="contact-form-heading">
      <Container variant="narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="contact-form-heading" className="font-serif text-h2 text-burgundy text-center mb-10">
            Send Us a Message
          </h2>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-10 p-6 bg-burgundy/10 border border-burgundy/30 rounded-lg text-center"
                role="alert"
              >
                <svg className="w-12 h-12 mx-auto mb-4 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 className="font-serif text-h4 text-burgundy mb-2">Message Sent Successfully</h3>
                <p className="font-mono text-body text-charcoal/70">Thank you for reaching out. We'll be in touch within 24 hours.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-10 p-6 bg-red-50 border border-red-300 rounded-lg text-center"
                role="alert"
              >
                <svg className="w-12 h-12 mx-auto mb-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <h3 className="font-serif text-h4 text-red-600 mb-2">Something Went Wrong</h3>
                <p className="font-mono text-body text-red-600">Please try again or email us directly at hello@kundacreative.com</p>
              </motion.div>
            )}

            {submitStatus === null && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    {...register('name')}
                    type="text"
                    label="Name"
                    name="name"
                    error={errors.name?.message}
                    required
                    placeholder="Your name"
                    onChange={(e) => handleChange('name', e.target.value)}
                  />

                  <FormInput
                    {...register('email')}
                    type="email"
                    label="Email"
                    name="email"
                    error={errors.email?.message}
                    required
                    placeholder="your@email.com"
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>

                <FormInput
                  {...register('company')}
                  type="text"
                  label="Company (Optional)"
                  name="company"
                  placeholder="Company name"
                  onChange={(e) => handleChange('company', e.target.value)}
                />

                <FormInput
                  {...register('service')}
                  type="select"
                  label="Service Interest"
                  name="service"
                  error={errors.service?.message}
                  required
                  options={serviceOptions}
                  placeholder="Select a service"
                  onChange={(e) => handleChange('service', e.target.value)}
                />

                <FormInput
                  {...register('message')}
                  type="textarea"
                  label="Message"
                  name="message"
                  error={errors.message?.message}
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                  onChange={(e) => handleChange('message', e.target.value)}
                />

                <FormInput
                  {...register('budget')}
                  type="select"
                  label="Budget Range (Optional)"
                  name="budget"
                  options={budgetOptions}
                  placeholder="Select budget range"
                  onChange={(e) => handleChange('budget', e.target.value)}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>

                <p className="font-mono text-body-sm text-charcoal/50 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactForm;