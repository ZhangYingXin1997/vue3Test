interface ImportMetaEnv {
  /**
   * 应用标题
   */
  VITE_API_TITLE: string
  /**
   * 应用端口
   */
  VITE_APP_PORT: string
  /**
   * API基础路径（反向路由）
   */
  VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
