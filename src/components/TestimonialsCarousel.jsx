/* components/TestimonialsGrid.jsx */
const testimonials = [
    {
        text: 'Using Emberi has transformed how I understand my emotions. It’s like having a personal guide to my feelings!',
        name: 'Sarah Johnson',
        role: 'Wellness Coach, Thrive',
        avatar: 'https://www.shutterstock.com/image-vector/profile-picture-user-vector-illustration-600nw-2482138073.jpg',
    },
    {
        text: 'Emberi helped me notice patterns in mood swings I’d missed for years. Truly life-changing.',
        name: 'Mark Chen',
        role: 'Product Designer, Medium',
        avatar: 'https://www.shutterstock.com/image-vector/profile-picture-user-vector-illustration-600nw-2482138073.jpg',
    },
    {
        text: 'Каждый вечер включаю медитации с AI-питомцем — засыпаю быстрее и просыпаюсь бодрее.',
        name: 'Анна Петрова',
        role: 'HR Lead, Yandex',
        avatar: 'https://www.shutterstock.com/image-vector/profile-picture-user-vector-illustration-600nw-2482138073.jpg',
    },
    {
        text: 'Love the mood-tracking graphs! My therapist and I now use them to discuss weekly progress.',
        name: 'Julia Smith',
        role: 'University Student',
        avatar: 'https://www.shutterstock.com/image-vector/profile-picture-user-vector-illustration-600nw-2482138073.jpg',
    },
];

export default function TestimonialsGrid() {
    return (
        <section className="testimonials-grid fade-up">
            <h2>Что говорят пользователи</h2>

            <div className="grid">
                {testimonials.map((t, i) => (
                    <figure className="card" key={i}>
                        <blockquote>{t.text}</blockquote>
                        <figcaption>
                            <img src={t.avatar} alt="" />
                            <div>
                                <span className="name">{t.name}</span>
                                <span className="role">{t.role}</span>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
