{
  "targets": [
    {
      "target_name": "<(module_name)",
      "type": "shared_library",
      "sources": [ "src/sqlite3ext_uuid.c" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      'product_dir': '<(module_path)',
      "xcode_settings": {
        "MACOSX_DEPLOYMENT_TARGET":"10.9"
      },
      "win_delay_load_hook": 'false',
      'conditions': [
        ['OS=="linux"', {
          'libraries': [
            '-luuid'
          ]
        }
        ]
      ]
    }
  ]
}
