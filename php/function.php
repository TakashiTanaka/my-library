<?php
/**
* getJsonData
* jsonデータを取得する関数
* @param mixed $fileName
* @return array 連想配列
*/
function getJsonData($fileName)
{
    $url = get_template_directory() . "/data/$fileName";
    $json = file_get_contents($url);
    $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    return json_decode($json, true);
}
