<script>
	import { enhance } from '$app/forms';

    let { form } = $props();
</script>


<main>
    {#if form?.success}
        <div class="success-message">
            <h2>Message Sent!</h2>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    {/if}
    

    <form action="/" method="post" class="contact-form" novalidate use:enhance>
        <section>

            <h1 class="heading">Contact Us</h1>

            <section class="form-body">
                <div class="name-fieldset">
                    <div class="input-wrapper">
                        <label for="first-name">First Name <span class="required">*</span></label>
                        <input type="text" id="first-name" 
                            name="firstName" 
                            value={form?.values?.firstName ?? ''}
                            placeholder="" 
                            required />
                        <p class="field-error">{form?.errors?.fieldErrors?.firstName}</p>
                    </div>
                    
                    <div class="input-wrapper">
                        <label for="last-name">Last Name <span class="required">*</span></label>
                        <input type="text" id="last-name" name="lastName" value={form?.values?.lastName ?? ''} placeholder="" required />
                        <p class="field-error">{form?.errors?.fieldErrors?.lastName}</p>
                    </div>

                </div>
                
                <div class="input-wrapper">
                    <label for="email">Email Address <span class="required">*</span></label>
                    <input type="email" id="email" name="email" value={form?.values?.email ?? ''} placeholder="" required />
                    <p class="field-error">{form?.errors?.fieldErrors?.email}</p>
                </div>
                
                <div class="query-type-fieldset">
                    <p>Query Type <span class="required">*</span></p>

                    <div class="options-wrapper">
                        <label for="general-enquiry" class="option">
                            <input type="radio" id="general-enquiry" name="queryType" value="general-enquiry" checked={form?.values?.queryType === 'general-enquiry'} required />
                            General Enquiry</label>
                            
                            <label for="support-request" class="option">
                                <input type="radio" id="support-request" name="queryType" value="support-request" checked={form?.values?.queryType === 'support-request'}    required />
                                Support Request</label>
                                
                    </div>
                    <p class="field-error">{form?.errors?.fieldErrors?.queryType}</p>
                </div>
                
                <div class="input-wrapper">
                    <label for="message">Message <span class="required">*</span></label>
                    <textarea id="message" 
                        name="message" 
                        required>
                        {form?.values?.message ?? ''}
                    </textarea>
                    <p class="field-error">{form?.errors?.fieldErrors?.message}</p>
                </div>
            </section>
        </section>

        <div class="consent-wrapper">
            
            <div class="consent-wrapper__inner">
                <input type="checkbox" id="consent" name="consent" checked={form?.values?.consent === 'on'} required />
                <label for="consent">I consent to being contacted by the team <span class="required">*</span></label>
            </div>

            <p class="field-error">{form?.errors?.fieldErrors?.consent}</p>
        </div>

        <button type="submit" class="submit-btn">Submit</button>
    </form>
</main>
