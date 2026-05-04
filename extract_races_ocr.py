import asyncio
import os
import winrt.windows.media.ocr as ocr
import winrt.windows.storage as storage
import winrt.windows.graphics.imaging as imaging
import winrt.windows.globalization as globalization

async def extract_text_from_image(file_path):
    lang = globalization.Language("pt-BR")
    if not ocr.OcrEngine.is_language_supported(lang):
        engine = ocr.OcrEngine.try_create_from_user_profile_languages()
    else:
        engine = ocr.OcrEngine.try_create_from_language(lang)

    try:
        file = await storage.StorageFile.get_file_from_path_async(os.path.abspath(file_path))
        stream = await file.open_async(storage.FileAccessMode.READ)
        decoder = await imaging.BitmapDecoder.create_async(stream)
        bitmap = await decoder.get_software_bitmap_async()
        result = await engine.recognize_async(bitmap)
        return result.text
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return ""

async def main():
    base_dir = r"C:\Projetos\Symbaroumlore\Livros\Raças"
    output_file = r"C:\Projetos\Symbaroumlore\Livros\Raças_Extracted_Text.txt"
    
    with open(output_file, "w", encoding="utf-8") as f:
        for root, dirs, files in os.walk(base_dir):
            for file_name in files:
                if file_name.lower().endswith((".png", ".jpg", ".jpeg")):
                    file_path = os.path.join(root, file_name)
                    print(f"Reading: {file_name} from {root}")
                    text = await extract_text_from_image(file_path)
                    f.write(f"\n=== Imagem: {file_name} (Pasta: {os.path.basename(root)}) ===\n")
                    f.write(text)
                    f.write("\n")

if __name__ == "__main__":
    asyncio.run(main())
