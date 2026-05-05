
import z from 'zod';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();

        const contactFormSchema = z.object({
            firstName: z.string().trim().min(1, 'First name is required'),
            lastName: z.string().trim().min(1, 'Last name is required'),  
            email: z.email('Please enter a valid email address'),
            queryType: z.enum(['general-enquiry', 'support-request'], {
                error: 'Please select a query type',
            }),
            message: z.string().trim().min(1, 'Message is required'),
            consent: z.literal('on', {
                error: "You must consent to being contacted by the team",
            }),
        });

        const result = contactFormSchema.safeParse(Object.fromEntries(formData));

        if (!result.success) {
            return {
                success: false,
                values: Object.fromEntries(formData),
                errors: z.flattenError(result.error),
            };
        }

        return {
            success: true,
            data: result.data,
        };
    }
}