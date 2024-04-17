export default function CloseRing({bgColor,iconColor}:{bgColor?:string,iconColor?:string}) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="7.5" fill={bgColor} fillOpacity="0.25" />
            <path d="M7.5 7.5L12.5 12.5" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12.5 7.5L7.5 12.5" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
    )
}
