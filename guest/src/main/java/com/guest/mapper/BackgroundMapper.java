package com.guest.mapper;

import com.guest.pojo.po.Background;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author 张雪萍
 * @since 2020-11-27* @author qianye
 *  * @since 2023-9-17
 */
@Mapper
@Repository
public interface BackgroundMapper extends BaseMapper<Background> {

}
