// API key
const apiKey = 'QO1ssjtLMCTzx2KaXW2XTKOto8RDdBB7IjXQYw2_URUF_UFVGw0r_toz5ZNcICdVlpm2dbv1ZwE42C-vXVGkOHYzCQd3ZW2__UYgy8q-F4lHEgdltQ9_pvC1LRB6ZXYx';

export const searchYelp = async (term, location, sortBy) => {
    try {
        const corsProxy = "https://proxy-ibmasyzzya-uc.a.run.app/";
        const yelpApi = 'https://api.yelp.com/v3/businesses/search';
        const searchParams = `?term=${term}&location=${location}&sort_by=${sortBy}`;
        const fetchOptions = { headers: { Authorization: `Bearer ${apiKey}` } };

        const response = await fetch(corsProxy + yelpApi + searchParams, fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse.businesses);

        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zipCode,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};
