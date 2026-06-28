function Slide({ title, image }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
        </div>
    );
}

export { Slide };