package graphqlbackend

import "github.com/sourcegraph/sourcegraph/internal/markdown"

type markdownResolver struct {
	text string
}

type MarkdownResolver interface {
	Text() string
	HTML() string
}

func NewMarkdownResolver(text string) MarkdownResolver {
	return &markdownResolver{
		text: text,
	}
}

func (m *markdownResolver) Text() string {
	return m.text
}

func (m *markdownResolver) HTML() string {
	return markdown.Render(m.text)
}
