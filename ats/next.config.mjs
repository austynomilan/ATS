/** @type {import('next').NextConfig} */ 
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "www.trustpilot.net"
            }
        ]
    }
};

export default nextConfig;
