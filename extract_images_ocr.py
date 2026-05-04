import asyncio
import os
import winrt.windows.media.ocr as ocr
import winrt.windows.storage as storage
import winrt.windows.graphics.imaging as imaging
import winrt.windows.globalization as globalization

async def extract_text_from_image(file_path):
    # Determine language
    lang = globalization.Language("pt-BR")
    
    if not ocr.OcrEngine.is_language_supported(lang):
        print("Language not supported! Falling back to default.")
        engine = ocr.OcrEngine.try_create_from_user_profile_languages()
    else:
        engine = ocr.OcrEngine.try_create_from_language(lang)

    try:
        # Get storage file
        file = await storage.StorageFile.get_file_from_path_async(os.path.abspath(file_path))
        
        # Open file stream
        stream = await file.open_async(storage.FileAccessMode.READ)
        
        # Create decoder
        decoder = await imaging.BitmapDecoder.create_async(stream)
        
        # Get software bitmap
        bitmap = await decoder.get_software_bitmap_async()
        
        # Recognize text
        result = await engine.recognize_async(bitmap)
        
        return result.text
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return ""

async def main():
    dirs_to_process = [
        r"C:\Projetos\Symbaroumlore\Livros\LivroBásicoImagens",
        r"C:\Projetos\Symbaroumlore\Livros\TenebreImagens"
    ]
    
    output_file = r"C:\Projetos\Symbaroumlore\Livros\Extracted_Images_Text.txt"
    
    with open(output_file, "w", encoding="utf-8") as f:
        for dir_path in dirs_to_process:
            if not os.path.exists(dir_path):
                print(f"Directory not found: {dir_path}")
                continue
                
            f.write(f"\n--- Processando pasta: {dir_path} ---\n\n")
            print(f"Processing directory: {dir_path}")
            
            for file_name in os.listdir(dir_path):
                if file_name.lower().endswith((".png", ".jpg", ".jpeg")):
                    file_path = os.path.join(dir_path, file_name)
                    print(f"Reading: {file_name}")
                    
                    text = await extract_text_from_image(file_path)
                    
                    f.write(f"\n=== Imagem: {file_name} ===\n")
                    f.write(text)
                    f.write("\n")

if __name__ == "__main__":
    asyncio.run(main())
