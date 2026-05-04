import zipfile
import xml.etree.ElementTree as ET
import glob
import os

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            PARA = WORD_NAMESPACE + 'p'
            TEXT = WORD_NAMESPACE + 't'
            
            paragraphs = []
            for paragraph in tree.iter(PARA):
                texts = [node.text for node in paragraph.iter(TEXT) if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            
            return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error extracting {docx_path}: {e}"

docx_files = glob.glob(r"C:\Projetos\Symbaroumlore\Livros\*.docx")
for f in docx_files:
    print(f"Extracting: {os.path.basename(f)}")
    text = extract_text_from_docx(f)
    print(f"Extracted {len(text)} characters.")
    
    out_path = f.replace('.docx', '-from-docx.txt')
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(text)
    print(f"Saved to {os.path.basename(out_path)}")
