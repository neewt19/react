import * as S from './TextBox.styled'
import { useEditor } from '@tiptap/react'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { StarterKit } from '@tiptap/starter-kit'
import { useState, useEffect } from 'react'
import CharacterCount from '@tiptap/extension-character-count'

const limit = 100
const MenuBar = () => {
  const [content, setContent] = useState("")
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
      CharacterCount.configure({
        limit,
      }),
    ],
    content: content,

    onUpdate: ({ editor }) => {
      const json = editor.getHTML();
      setContent(json)
      localStorage.setItem(`content`, json)
    },
  })
  useEffect(() => {
    const savedContent = localStorage.getItem(`content`);
    if (savedContent) {
      setContent(savedContent);
    }
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor]);


  if (!editor) return null

  return (
    <>
      <S.Container>
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
          left
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
          center
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
          right
        </button>
      </S.Container>
      {editor && <S.BubleMenu tippyOptions={{ duration: 100 }} editor={editor}>
        <S.Buttons onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}>
          Bold
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}>
          Code
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? ' is-active' : ''}>
          BlockCode
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
          H1
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </S.Buttons>
      </S.BubleMenu>}

      {editor && <S.FloatingMenub tippyOptions={{ duration: 100 }} editor={editor}>
        <S.Buttons onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          BlockCode
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </S.Buttons>
        <S.Buttons onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </S.Buttons>
      </S.FloatingMenub>}
      <S.Editorcontent editor={editor} />
      <S.CharacterCount>
        {editor.storage.characterCount.characters()}/{limit} characters
      </S.CharacterCount>
    </>
  )
}

export function TextBox() {
  return (
    <MenuBar></MenuBar>
  )
}