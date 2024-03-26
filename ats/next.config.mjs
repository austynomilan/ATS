/** @type {import('next').NextConfig} */ 
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: 'www.trustpilot.net'
            },
            {
                protocol: "https",
                hostname: 'media.istockphoto.com'
            },
            {
                protocol: "https",
                hostname: 'www.example.com'
            },
        ]
    }
};

export default nextConfig;
