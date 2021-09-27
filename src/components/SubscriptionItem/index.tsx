type SubscriptionItemProps = {
    title: string;
    projectImage: string;
    subscriptionLink: string;
    altText: string;
  }

export default function SubscriptionItem({
    projectImage,
    title,
    subscriptionLink,
    altText
}: SubscriptionItemProps) {
    return (
        <a href={subscriptionLink} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2.4rem',
            marginLeft: '1rem',
            marginRight: '1rem'
        }}>
            <img 
                src={projectImage}
                alt={altText}
                style={{ 
                    marginRight: '1.2rem', 
                    borderRadius: "50%", 
                    width: "5rem", 
                    height: '5rem', 
                    objectFit: 'cover',
                }} />
            <p style={{
                color: "#B8BEDD",
                fontSize: '1.2rem',
                textDecoration: 'underline',
                cursor: 'pointer',
                maxWidth: '35rem',
                textAlign: 'center'
            }}>{title}</p>
        </a>
    )
}