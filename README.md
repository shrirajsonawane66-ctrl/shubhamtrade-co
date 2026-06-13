# Shubham Trading Co. Website

A professional business website for Shubham Trading Co. (STC), a supplier of construction materials in Navi Mumbai, India.

## Features

- **Multi-page website** with home, products, about, gallery, and contact pages
- **Product showcase** for Flyash, PCE-based concrete admixtures, and synthetic fibers
- **Contact form** with email integration via Resend
- **Responsive design** using Tailwind CSS
- **WhatsApp integration** for instant customer support
- **Google Maps** for location display
- **Professional design** with industry photography

## Pages

### Home
- Hero section with company tagline
- Three product category cards linking to product sections
- "Why Choose Us" benefits strip highlighting GST registration, quality testing, bulk supply, reliable delivery, and Navi Mumbai location
- Floating WhatsApp button

### Contact
- Simplified contact page showing only company information
- No contact form (removed as requested)
- Direct contact details: address, phone, email, GST, business hours
- Quick contact buttons: Call Now and WhatsApp
- Embedded Google Maps for location

### Products
- **Flyash**: Description and "Enquire about Flyash" button
- **Admixtures**: Spec card/table for Superplast 509, 401, and 320 with technical specifications
- **Fibers**: Fibertech GF and Fibertech PP product cards with comparison table
- All product enquiries link to contact form with pre-filled product field

### About
- Company introduction and history
- List of products and services
- GST number displayed as trust badge

### Gallery
- Responsive image grid with construction industry photos
- Various site, equipment, and product images

### Contact
- Contact form with Name, Phone, Email, Company/Site Name, Product Interested In (dropdown), Quantity Required (optional), and Message fields
- Form pre-fills product field if "product" query parameter is provided
- Click-to-call and WhatsApp buttons
- Embedded Google Maps for location

## Technical Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel ready
- **Email**: Resend API for contact form submission
- **SEO**: Optimized for local search (flyash supplier Navi Mumbai, concrete admixture supplier Vashi, etc.)

## Brand

- **Colors**: Navy blue (#1B2A5E) and Orange (#F47920)
- **Logo**: "STC — Shubham Trading Co."
- **Typography**: Professional sans-serif fonts
- **Graphics**: Hexagon-shaped accents/dividers

## Company Information

- **Name**: Shubham Trading Co.
- **Address**: B2/3, Room No. 20, Sector 15, Vashi, Navi Mumbai – 400703
- **Phone/WhatsApp**: +91 9167399697
- **Email**: shubhamtradingcompany19@gmail.com
- **GST**: 27ABKPW4972C1Z8

## Deployment

This project is ready for deployment on Vercel. Simply:
1. Push changes to your repository
2. Connect to Vercel from your Git provider
3. Configure the RESEND_API_KEY environment variable
4. Point your domain

## Future Enhancements

- Admin panel for product management (Supabase integration)
- Additional product categories
- Blog/news section
- Advanced search functionality
- Mobile app

## Notes

- No pricing information is displayed (business policy)
- All contact forms send email to shubhamtradingcompany19@gmail.com
- The site is fully responsive and mobile-first
- Performance optimized with static generation where possible
