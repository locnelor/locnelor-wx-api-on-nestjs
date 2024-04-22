import { Inject, Injectable } from '@nestjs/common';
import { WXOFFIACCOUNT_MODULE_OPTIONS_TOKEN } from './wx-offiaccount.module-definition';
import { WxOffiaccountModuleOptions } from './wx-offiaccount.module.interface';

@Injectable()
export class WxOffiaccountService {
    constructor(
        @Inject(WXOFFIACCOUNT_MODULE_OPTIONS_TOKEN)
        private options: WxOffiaccountModuleOptions
    ) { }

    /**
     * @description
     * 获取access_token
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html
     */
    public async getAccessToken() { }

    private async getToken() { }


    /**
     * @description
     * 创建菜单 
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Creating_Custom-Defined_Menu.html
     */
    public async createMenu() { }

    /**
     * @description
     * 查询菜单
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Querying_Custom_Menus.html
     */
    public async getCurrentSelfmenuInfo() { }

    /**
     * @description
     * 删除菜单
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Deleting_Custom-Defined_Menu.html
     */
    public async deleteMenu() { }

    /**
     * @description
     * 创建个性化菜单
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Personalized_menu_interface.html
     */
    public async addConditional() { }

    /**
     * @description
     * 获取自定义菜单配置
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Custom_Menus/Getting_Custom_Menu_Configurations.html
     */
    public async getConditional() { }

    /**
     * @description
     * 新增临时素材
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html
     */
    public uploadMedia() { }

    /**
     * @description
     * 获取临时素材
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html
     */


    /**
     * @description
     * 新增永久素材
     * @link
     * 
     */

    /**
     * @description
     * 获取永久素材
     * @link
     * 
     */

    /**
     * @description
     * 删除永久素材
     * @link
     * 
     */

    /**
     * @description
     * 获取素材总数
     * @link
     */

    /**
     * @description
     * 获取素材列表
     * @link
     */


    /**
     * @description
     * 新增草稿箱
     * @link
     * 
     */

    /**
     * @description
     * 获取草稿箱
     * @link
     * 
     */

    /**
     * @description
     * 删除草稿箱
     * @link
     * 
     */

    /**
     * @description
     * 修改草稿箱
     * @link
     * 
     */


    /**
     * @description
     * 获取草稿总数
     * @link
     * 
     */

    /**
     * @description
     * 获取草稿列表
     * @link
     * 
     */



    /**
     * @description
     * 发布接口
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Publish/Publish.html
     */
    public async freePublishSubmit() { }

    /**
     * @description
     * 发布状态轮询
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_status.html
     */
    public async freePublishGet() { }

    /**
     * @description
     * 删除发布
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Publish/Delete_posts.html
     */
    public async freePublishDelete() { }

    /**
     * @description
     * 通过 article_id 获取已发布文章
     * @link
     * https://developers.weixin.qq.com/doc/offiaccount/Publish/Get_article_from_id.html
     */
    public async freePublishGetArticle() { }

}
